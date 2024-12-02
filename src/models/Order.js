// src/models/Order.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export const getOrders = async (email) => {
    const { data, error } = await supabase.from("ordered").select().eq("user_email", email)
    if (error) {
      console.error("Error fetching Orders:", error)
      return null
    }
    return data
}