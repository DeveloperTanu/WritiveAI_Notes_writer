const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData() {
    const response = await fetch(`${API_URL}/api/`)
}