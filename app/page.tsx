import Learners from "@/components/charts/learners";
import RegisteredVehicles from "@/components/charts/vehicles";
import RoadsClassification from "@/components/charts/roads-classification";
import KeyFigures from "@/components/ui/key-figures";
import useDashboard from "@/hooks/useDashboard";
import TopSubscribers from "@/app/communication/components/top-subscribers";
import HeroBanner from "@/components/hero-banner";

export default async function Home() {
  const {
    pieChartData,
    pieChartDataError,
    registeredVehicles,
    registered_vehicles_error,
    roads_classification,
    roads_classification_error,
    internet_subscribers,
    internet_subscribers_error,
  } = await useDashboard();

  return (
    <div className="flex flex-col gap-4 py-2 px-4 lg:px-8 bg-slate-50 min-h-screen">
      <HeroBanner/>
      <KeyFigures />
      <div className="grid xl:grid-cols-2 place-items-start gap-4 w-full">
        {/* <TopFigures /> */}
        <Learners data={pieChartData} error={pieChartDataError} />
        <RegisteredVehicles
          data={registeredVehicles}
          error={registered_vehicles_error}
        />
        <RoadsClassification
          data={roads_classification}
          error={roads_classification_error}
        />
        <TopSubscribers
          data={internet_subscribers}
          error={internet_subscribers_error}
          length={3}
        />
      </div>
    </div>
  );
}
