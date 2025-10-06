const API_BASE = import.meta.env.VITE_API_BASE;

export async function fetchSchools(search = "") {
  const url = `${API_BASE}/campaign/campaign_school_list/?search=${encodeURIComponent(
    search
  )}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API Error ${res.status}`);
  const data = await res.json();

  if (Array.isArray(data)) return data;
  if (data.school_list) return data.school_list;
  return [];
}
