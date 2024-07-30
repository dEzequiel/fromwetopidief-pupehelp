export default function getTripNameFromUrl(url) {
    const urlObj = new URL(url);

    const path = urlObj.pathname;
    const tripNameWithDashes = path.split('/').filter(Boolean).pop();
    const tripName = tripNameWithDashes.replace(/-/g, ' ').toUpperCase();

    return tripNameWithDashes;
}