export class Apis {
  constructor() {

  }

  matchApi(url: string, content: any) {
    const [meetKey] = Object.assign({
      dashboard: "/business_api/author/live_detail/live_room/dashboard_v2"
    }).find(([k, _url]: any) => {
      return url?.includes(_url)
    })
    return {meetKey, content}
  }
}