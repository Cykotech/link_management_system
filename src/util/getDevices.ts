export async function getDevices(): Promise<TDevice[]> {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwj7h5oMqFxMOGqW-WDSDAh9U93PzjenhPhPHJjlN9uez7MXKEXqpTD4Zx830TbJZQ/exec?type=zonai"
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
