import PageFooter from "@/components/page-footer";
import PageHeader from "@/components/page-header";
import Image from "next/image";

export default function WorkPage() {
  const workItems = [
    {
      title: "Mock Rib Side Seam",
      client: "Loop Tackle",
      manufactured: "Jul 25, 2025",
      yarnType: "100% MERINO WOOL",
      knitBy: "Lauren McDermott",
      image: "/images/11.png",
    },
    {
      title: "Mock Rib Side Seam",
      client: "Loop Tackle",
      manufactured: "Jul 25, 2025",
      yarnType: "100% MERINO WOOL",
      knitBy: "Lauren McDermott",
      image: "/images/12.png",
    },
    {
      title: "Swatch",
      client: "Tory Burch",
      manufactured: "Jul 25, 2025",
      yarnType: "MOHAIR & ACRYLIC",
      knitBy: "Lauren McDermott",
      image: "/images/13.png",
    },
    {
      title: "Cable Knit Sample",
      client: "Everlane",
      manufactured: "Aug 12, 2025",
      yarnType: "ORGANIC COTTON",
      knitBy: "Lauren McDermott",
      image: "/images/13.png",
    },
    {
      title: "Textured Weave",
      client: "COS",
      manufactured: "Aug 18, 2025",
      yarnType: "RECYCLED WOOL",
      knitBy: "Lauren McDermott",
      image: "/images/12.png",
    },
    {
      title: "Ribbed Collar",
      client: "Uniqlo",
      manufactured: "Sep 02, 2025",
      yarnType: "CASHMERE BLEND",
      knitBy: "Lauren McDermott",
      image: "/images/11.png",
    },
  ];

  return (
    <>
      <PageHeader title="OUR WORK" />
      <main className="min-h-screen bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workItems.map((item, index) => (
              <div key={index} className="border-b border-black pb-6">
                {/* Header section with title and date */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-sans text-sm font-medium tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-600 mt-1">
                      {item.client}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-xs font-medium tracking-wide uppercase">
                      MANUFACTURED
                    </p>
                    <p className="font-sans text-xs text-gray-600 mt-1">
                      {item.manufactured}
                    </p>
                  </div>
                </div>

                {/* Image section */}
                <div className="aspect-square mb-4 bg-gray-100 overflow-hidden">
                  <Image
                    src={item.image || "/images/1.png"}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Footer section with yarn type and knit by */}
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-sans text-xs font-medium tracking-wide uppercase mb-1">
                      YARN TYPE
                    </p>
                    <p className="font-sans text-xs text-gray-800">
                      {item.yarnType}
                    </p>
                  </div>
                  <div className="text-right flex items-end gap-3">
                    <div>
                      <p className="font-sans text-xs font-medium tracking-wide uppercase mb-1">
                        KNIT BY
                      </p>
                      <p className="font-sans text-xs text-gray-800">
                        {item.knitBy}
                      </p>
                    </div>
                    {/* Small logo */}
                    <div className="w-6 h-6">
                      <Image
                        src="/brand/round_logo.png"
                        alt="MAEKNIT round logo"
                        width={24}
                        height={24}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <PageFooter />
    </>
  );
}
