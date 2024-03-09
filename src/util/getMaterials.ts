export type TMaterial = {
  name: string,
  imgSrc: string,
}

export async function getMaterials(): Promise<TMaterial[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxKP-yGhf7s9zWImE2dmc9hUA9k3i5SVV0vf-kiqlT6JBXAH26pBaZDRbxyDhkpOZU/exec?type=materials"
    );
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err);
  }
}