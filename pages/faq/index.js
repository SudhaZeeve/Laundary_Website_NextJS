import Accordion from "@/components/commonComponents/accordion";

function FAQ(props) {
    const {accordionDataOne} = props;
    return (
        <>
            <div className="container mx-auto bg-white p-16 rounded">
                <div className="mx-auto mb-8 text-center">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">Frequently Asked Questions</h2>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex max-w-xl flex-col items-start justify-between gap-y-5">
                        <Accordion data={accordionDataOne} />
                    </div>
                    <div className="flex max-w-xl flex-col items-start justify-between ">
                        <Accordion data={accordionDataOne} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default FAQ;

// export const accordionDataOne = [
//     {
//         id: 1,
//         Heading: "What are your hours?",
//         Description: "We're open 7 days/week from 8am to 10pm."
//     },
//     {
//         id: 2,
//         Heading: "What is the last wash time?",
//         Description: "The posted time for starting the last wash is 9:00 PM. This typically allows enough time for our customers to finish washing, drying and folding their clothes by 10:00 PM."
//     },
//     {
//         id: 3,
//         Heading: "Is coin-less laundry really coin-less?",
//         Description: "All the machines work with a laundry card – you don’t need to bring quarters. You can use cash, VISA or MasterCard to add value to a laundry card that may be re-loaded as you use up the balance on your card."
//     },
//     {
//         id: 4,
//         Heading: "How do I get a new laundry card?",
//         Description: "You may get a laundry card by visiting the VTM (Value Transfer Machine) at the back of the store. Follow the simple steps to get a laundry card and add value by inserting cash, VISA or MasterCard. You can add money to the card as needed. Our friendly staff is always available to assist you if you need help with your transaction. There is also an available mobile app, directions can be loacted near the kiosk at the back of the store."
//     },
//     {
//         id: 5,
//         Heading: "How do I add money to the card?",
//         Description: "You can add money to your card using cash, VISA or MasterCard at the VTM (Value Transfer Machine) next to the office. Please see the attendant if you need any assistance with your transaction. You can also register your card with Fascard by clicking here or by downloading the Fascard Mobile Apple with Apple & Android)"
//     },
//     {
//         id: 6,
//         Heading: "Is my laundry card reusable/reloadable?",
//         Description: "Yes, the card will retain any unused balance for future visits and can be reused and reloaded as often as needed. You can reload your Fascard by clicking here or download their app in your devices app store. Please note that other laudromats use the same system, however our cards only work at our location."
//     },
// ]

export async function getServerSideProps() {
    const product = await fetch('http://localhost:4000/accordionDataOne');
    const data = await product.json()
    return {
        props: {
            accordionDataOne: data
        }
    }
}