import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "ssstakahashi home-page" },
    { name: "ssstakahashi home-page", content: "ssstakahashi-profile" },
  ];
};

export default function Index() {

  return (
    <div className="mt-16">
      <div className="border-t-5 border-black mb-2"></div>
      {/* <div className="border-t border-black mb-2"></div> */}
      <div className="w-7/10 flex flex-col justify-center mx-auto">

        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center">
            <div className="my-36 h-135">
              <img
                src="https://ssstakahashi-storage.studiofoods.net/image/%E7%94%B0%E8%88%8E%E3%81%A8%20%E9%83%BD%E4%BC%9A%E3%81%AE%20%E3%82%AD%E3%83%9E%E3%83%9E%E3%81%AA%E7%94%9F%E6%B4%BB.svg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}