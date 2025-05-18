import { UAParser } from "ua-parser-js";

const fetchGeoLocationFromIP = async () => {
    try {
        const response = await fetch("http://ip-api.com/json/?fields=57553");
        const data = await response.json();

        if (data.status === "fail") {
            console.error("Geo location fetch failed:", data.message);
            return {
                ip: ipAddress,
                city: "Unknown",
                country: "Unknown",
                latitude: "Unknown",
                longitude: "Unknown",
            };
        }

        return {
            ip: data.query || ipAddress,
            city: data.city || "Unknown",
            country: data.country || "Unknown",
            latitude: data.lat || "Unknown",
            longitude: data.lon || "Unknown",
        };
    } catch (error) {
        console.error("Error fetching IP location:", error);
        return {
            ip: ipAddress,
            city: "Unknown",
            country: "Unknown",
            latitude: "Unknown",
            longitude: "Unknown",
        };
    }
};

const generateLoginAlertPayload = async (req) => {
    const userAgentString = req.headers["user-agent"];

    const parser = new UAParser(userAgentString);
    const browserName = parser.getBrowser().name || "Unknown Browser";
    const osName = parser.getOS().name || "Unknown OS";
    const deviceInfo = `${browserName} on ${osName}`;

    const locationInfo = await fetchGeoLocationFromIP();
    const locationString = `${locationInfo.city}, ${locationInfo.country}`;

    const loginTime = new Date().toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    return {
        ip: locationInfo.ip,
        device: deviceInfo,
        location: locationString,
        time: loginTime,
        year: new Date().getFullYear(),
    };
};

export { generateLoginAlertPayload };
