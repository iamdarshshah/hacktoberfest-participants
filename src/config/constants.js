export default {
  REQUIRED_PULL_REQUEST: '4',
  API_URL:
    'https://api.github.com/search/issues?per_page=50&q=-label:invalid+created:2020-09-30T00:00:00-12:00..2020-10-31T23:59:59-12:00+type:pr+is:public+draft:false+author:',
  API_URL_MERGED:
    'https://api.github.com/search/issues?per_page=50&q=-label:invalid+created:2020-09-30T00:00:00-12:00..2020-10-31T23:59:59-12:00+type:pr+is:public+draft:false+is:merged+author:',
}
