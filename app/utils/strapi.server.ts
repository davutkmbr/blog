export default async function strapi(uri: string) {
  const response = await fetch(`${process.env.STRAPI_BASE_URL}/${uri}`);

  return await response.json();
}
