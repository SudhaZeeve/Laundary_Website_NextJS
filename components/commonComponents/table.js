/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
const CommonTable = (props) => {
    const { data,tableBodyData } = props;
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {data.map((item,key) => {
                            return (
                                <th scope="col" className="px-6 py-3 whitespace-nowrap" key={key}>
                                    {item}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {tableBodyData.map((index) => {
                        return (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" index={index.id}>
                                <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
                                    {index.Cloths}
                                </td>
                                <td className="px-6 py-4 font-semibold text-gray-500 dark:text-white">
                                   ${index.Price}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CommonTable;

