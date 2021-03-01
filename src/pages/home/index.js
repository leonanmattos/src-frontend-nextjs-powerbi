import SideBar from '../../components/template/SideBar';
import { Report } from 'powerbi-report-component';

export default function Home() {
  const reportStyle = {
    height: 800
  };
  return (
    <>
      <SideBar />
      <div className="relative md:ml-64 bg-gray-200">
        <div className="px-4 md:px-10 mx-auto pt-10">
            <div className="h-full w-full">
                <Report
                  tokenType="Aad" // or, "Aad"
                  accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvY2QzMTY1YTUtNzc1Zi00MWMzLThkNDctMWMzZGE2NGVhOTNiLyIsImlhdCI6MTYxNDU0OTY4NSwibmJmIjoxNjE0NTQ5Njg1LCJleHAiOjE2MTQ1NTM1ODUsImFpbyI6IkUyWmdZQ2liOGYzVjlDZi9qdWhuV3dRc1kzV3FBZ0E9IiwiYXBwaWQiOiJmYTE4YzM1MS02ZTdkLTQxZjYtOTliMS1mM2U2YjZmMDZiZTUiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZDMxNjVhNS03NzVmLTQxYzMtOGQ0Ny0xYzNkYTY0ZWE5M2IvIiwib2lkIjoiOGFkNmE3MDItNGJjOS00ZGYwLWJkMzgtZGEwMzQ4OTcyNTgzIiwicmgiOiIwLkFBQUFwV1V4elY5M3cwR05SeHc5cGs2cE8xSERHUHA5YnZaQm1iSHo1cmJ3YS1WUkFBQS4iLCJzdWIiOiI4YWQ2YTcwMi00YmM5LTRkZjAtYmQzOC1kYTAzNDg5NzI1ODMiLCJ0aWQiOiJjZDMxNjVhNS03NzVmLTQxYzMtOGQ0Ny0xYzNkYTY0ZWE5M2IiLCJ1dGkiOiJNUmhuWkVETFRFaVZteFJ3bTVVcEFBIiwidmVyIjoiMS4wIn0.TXLYt-x2AyoqfD8B2Ht5945ZKQO28oXmU_hAHBQCJlkgcEOH96jJn8ZarxVkUSsgxkr6lp9z_IrpFRPKEvWbYhMj5dO0J_PZjnO0QSsVlFue4-DvZEbhBQGlcwacVd0StAMB6yoReOhUHr8LUf3LdPEjwcmQ2fUttwPZGzghwmgza11yDPI7UiofB_phwvZQLam8GSwWcirIyfGlhsr-mzmT4GuHXhFyCx617qUY46lizz4xeVgeJQp3mn2Y64DlF31ugboUZQ2BTYP74UmYsyKjYv5JlGxVqcfRdcDoNbdt55zplswX3YXzRzKr4_hRcyqb4tftudLYc8khuugfrw"
                  embedUrl="https://app.powerbi.com/reportEmbed?reportId=315c3b6a-2667-4b9f-9153-83afad5ba08f&groupId=0864e99e-6af9-47bf-8304-f345a9c9330d&config=H4sIAAAAAAAEAB2Ux66jWBRF_-VNKYlsoKQagMm-NjnOyDmYdMGt_vd29Xxp62jtrfPPj5lc_ZTkP79_DoYd8AjpkNaWaop48s39gtNyAUPlb8Y0ucBAdT4ZSf6RhCim1tqnOFK2ThybpCCCd1huKu7QjYN3iPdyVwItxiRR9rb7dqLKwwxNN_UlMd2Edzmva0tWEluQVteEautreg8SBtCTt5C46TJh0LEGfwTnZ73uHR52WiDHpL7hU0DvW2zcDx8I8dKPEIj4Ny8OYRKmE77hkiLz2tsw7E7iZofyvBMG_LgV9GQ2O3uJGJZSXkKhzftt4R5gDObVazBqp2RcOelUncfTcAAH4-RM7KcVR8ZFSqgIaDIdxRdaODq4Y6fRS8Fwaf0bJ8maZFZaqd1KbM2yTvnddyTPxicHnVU4C7n8lZhU5jeOQ4zN1MOB1FOVYNgp9m-M7Do2TY8aFhqKvoHD6_cwyBnCbA4cEHYgl_5gUTdM1jxZfVFLfevu_U54As5c4bod_dlD9VZAbp0I5EwkR3UZP_bQHQ8QGo20zSjGjY-nV0nIxDwRqmcViEZQLU5i-ptlD8Ld6DESTC3J4lxj-mBoD2ZpChbECHFXQd-l8ayNVJgmT0FluX62Hy4K0GCWVeHVhR_ovYjHUSey3PeEgVBqqOj8-brDxksYdfADNlAuO6_WntA0QVUE70OFCxtyHtlwF6_ozJSZVeKBmcGWhspWYkkeS6RNSEU7KyBgfwuI1iilhe3VW8zbIJRf7fsZJZPwKE8bctR67j-_fu7LNW_To7i-c65oH5Xj0HzdgCF_QIw1nZsdmNNjFYQXFcSIU3_hofrcBcCHs-wEo2G-7QbJ2o-eOZMUIzh5pd3JgDXDsBumOOBm2piYF2afVbyVTSReV2SXiRLM2arZuXzAt5i0JWmDJMsPTUmRGiJ2XX9XKg2NxPVhWS6luNx3HXipzCoINgvepJz2NlnKXqEtBun85IuqvnFJT7Ns2YuDyvJuVlLtUXAZ-wiOS1Lrte7gnZOqtE-nMmK711I-JmTn1r27JM6TsCHIMs4vhFG23hcJFcDhCMLdpLH2JwH22fp5jvCEXarp3u6ogLHCSSefJ3OO0dsG6dMps4otwmiQgB-2nslQ10FUf_781XzNdbFo_tcye74SIVM34FD8HBKTOzpFBv-nnKYak21fii9m-nLy2aJl10An7QA1kRfr4ZH4uGBXFl1CDHmmHPCFMncld2W-5p-oRTh094h2XVdLaCgifbX8Z5LfHUat75Ll21XHz6OVnxRWDaKqFLGRPiVlu2GjV7hO9Rk31MrEKMUyxHePnM1YC9sOQsxuDAnuhq6-cfyNxvpZdwyNYVyWrkmLw0NqOKUJTR3Ldb7QGXqsuYWZNX5-pTsAeJXomqwio4Z7JnwgJ5enjcMr4-cwS--ycUqmC3mu2iefw8-aZl2gCZPFaq63lPD7BoZ2NkvxcHLs7MYMJ-j9e2lYELDyHQC7dbPbpGodHjKqhcUomKeZ4K_dnVYk8jayQVmzQ3Nhb_-W8e9_umHM4sIFAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19"
                  embedId="315c3b6a-2667-4b9f-9153-83afad5ba08f" // report or dashboard Id goes here
                  pageName="Home" // set as current page of the report
                  reportMode="view" // options: view/edit/create
                  permissions="View" // View
                  style={reportStyle}
                  />
            </div>
        </div>
      </div>
    </>
  );
}
