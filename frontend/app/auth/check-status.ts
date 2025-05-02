export async function checkUserStatus(token: string): Promise<"register" | "consent" | "discovery" | "dashboard"> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/check-status`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to check user status");
    }
  
    const data = await res.json();
  
    if (!data.has_registered) return "register";
    if (!data.has_consented) return "consent";
    if (!data.has_discovery_data) return "discovery";
    return "dashboard";
  }
  