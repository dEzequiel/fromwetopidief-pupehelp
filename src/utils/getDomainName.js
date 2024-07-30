export default function getDomainName(url) {
    const urlO = new URL(url);
    let domain = urlO.hostname;

    if (domain.startsWith('www.')) {
        domain = domain.substring(4);
      }

    return domain;
}