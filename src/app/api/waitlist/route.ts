import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      // If Supabase is not configured, return success anyway for demo
      console.log(`Waitlist signup: ${email}`);
      return NextResponse.json({
        message: "Thanks for signing up! We'll be in touch soon.",
        success: true,
      });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, source: "website" }]);

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({
          message: "You're already on the waitlist!",
          success: true,
        });
      }
      throw error;
    }

    return NextResponse.json({
      message: "Thanks for signing up! We'll be in touch soon.",
      success: true,
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
