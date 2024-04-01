import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { code } = await req.json();
  try {
    console.log(code);
    const response = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
          code,
        }),
      }
    );

    const data = await response.json();

    console.log(data);
    if (data.error) {
      return NextResponse.json({
        error:
          data.error_description || "Failed to exchange code for access token.",
        status: 400,
      });
    }

    // Optionally, fetch user's GitHub profile or perform other actions here

    // Respond with a success message or the needed data (excluding sensitive information)
    return NextResponse.json({ data, status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Internal server error" });
  }
};
