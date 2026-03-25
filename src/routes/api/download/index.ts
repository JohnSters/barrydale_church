import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ url, send, error }) => {
  const fileUrl = url.searchParams.get("url");

  if (!fileUrl) {
    throw error(400, "Missing url parameter");
  }

  let response: Response;
  try {
    response = await fetch(fileUrl);
  } catch (err) {
    console.log("DEBUG::api/download", err);
    throw error(502, "Failed to fetch file");
  }

  if (!response.ok) {
    throw error(response.status, "Upstream file not found");
  }

  const filename = fileUrl.split("/").pop()?.split("?")[0] ?? "sermon.mp3";
  const contentType = response.headers.get("content-type") ?? "audio/mpeg";
  const contentLength = response.headers.get("content-length");

  const headers = new Headers({
    "Content-Type": contentType,
    "Content-Disposition": `attachment; filename="${filename}"`,
  });

  if (contentLength) {
    headers.set("Content-Length", contentLength);
  }

  send(new Response(response.body, { status: 200, headers }));
};
