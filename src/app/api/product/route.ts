import {
  NextRequest,
  NextResponse,
} from "next/server";

export function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    return NextResponse.json({
        status: true,
        data: searchParams.get("gender")
    });
  } catch (err) {
    throw err;
  }
}
