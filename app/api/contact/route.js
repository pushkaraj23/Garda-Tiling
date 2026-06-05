import { NextResponse } from "next/server";

function getBackendApiBase() {
  const base =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.CMS_API_BASE_URL ||
    "http://localhost:5000/api";
  return base.replace(/\/$/, "");
}

/** Proxy contact submissions to garda-tilling-api (avoids 405 on /contact page route). */
export async function POST(request) {
  try {
    const body = await request.json();
    const url = `${getBackendApiBase()}/contact`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err?.message || "Contact proxy failed" },
      { status: 502 }
    );
  }
}
