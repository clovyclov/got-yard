import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gotyardlandscape.com',
  server: {
    port: 3000,
    host: true
  },
  redirects: {
    // Service Area Redirects (Old /service-area/ to New /service-areas/)
    '/service-area/seattle': '/service-areas/seattle-wa',
    '/service-area/seattle-wa': '/service-areas/seattle-wa',
    '/service-area/arlington': '/service-areas/arlington-wa',
    '/service-area/arlington-wa': '/service-areas/arlington-wa',
    '/service-area/marysville': '/service-areas/marysville-wa',
    '/service-area/marysville-wa': '/service-areas/marysville-wa',
    '/service-area/everett': '/service-areas/everett-wa',
    '/service-area/everett-wa': '/service-areas/everett-wa',
    '/service-area/lake-stevens': '/service-areas/lake-stevens-wa',
    '/service-area/lake-stevens-wa': '/service-areas/lake-stevens-wa',
    '/service-area/stanwood': '/service-areas/stanwood-wa',
    '/service-area/stanwood-wa': '/service-areas/stanwood-wa',
    '/service-area/snohomish': '/service-areas/snohomish-wa',
    '/service-area/snohomish-wa': '/service-areas/snohomish-wa',
    '/service-area/granite-falls': '/service-areas/granite-falls-wa',
    '/service-area/granite-falls-wa': '/service-areas/granite-falls-wa',
    '/service-area/mill-creek': '/service-areas/mill-creek-wa',
    '/service-area/mill-creek-wa': '/service-areas/mill-creek-wa',
    '/service-area': '/service-areas/marysville-wa',

    // Legacy Service & Page Redirects (Old website paths to new structure)
    '/service/hardscaping': '/services/hardscaping',
    '/service/landscaping': '/services/landscaping',
    '/service/pressure-washing': '/services/pressure-washing',
    '/service/decks': '/services/decks',
    '/service/deck-building': '/services/decks',
    '/service/irrigation-system-installation': '/services/irrigation-system-installation',
    '/service/irrigation': '/services/irrigation-system-installation',
    '/service/landscape-design': '/services/landscape-design',
    '/service/3d-landscape-design': '/services/landscape-design',
    '/service': '/services/hardscaping',

    // Top-Level Legacy Path Redirects
    '/landscape-design': '/services/landscape-design',
    '/hardscaping': '/services/hardscaping',
    '/landscaping': '/services/landscaping',
    '/pressure-washing': '/services/pressure-washing',
    '/decks': '/services/decks',
    '/irrigation': '/services/irrigation-system-installation',
    '/project-gallery': '/gallery'
  }
});
