import CommonTable from "@/components/commonComponents/table";

const Prices = (props) => {
    const { TableBodyData } = props;
    return (
        <div className="container bg-white py-16 sm:py-16">
            <div className="mx-auto mb-8 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Laundromat Prices</h2>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="w-11/12 mx-auto items-center justify-center">
                    <h4 className="text-gray-800 mb-3 text-lg">Wash and Iron Laundry Price List</h4>
                    <CommonTable data={Object.keys(TableBodyData.ironLaundary[0])} tableBodyData={TableBodyData.ironLaundary} />
                </div>
                <div className="w-11/12 mx-auto items-center justify-center ">
                    <h4 className="text-gray-800 mb-3 text-lg">Dry Clean Price List</h4>
                    <CommonTable data={Object.keys(TableBodyData.dryCleaning[0])} tableBodyData={TableBodyData.dryCleaning} />
                </div>
            </div>

        </div>
    )
}

export default Prices;

export async function getStaticProps() {

    const pricebody = await fetch('http://localhost:4000/TableBodyData');
    const tableBodyData = await pricebody.json();

    return {
        props: {
            TableBodyData: tableBodyData
        },
        revalidate: 60,
    }
}