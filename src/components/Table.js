export const Table = ({children}) => (
  <table className="min-w-full leading-normal">
      <thead>
          <tr>
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Name
              </th>
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Value Locked
              </th>
              {/* <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Market Share
              </th> */}
              <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                  Type
              </th>
          </tr>
      </thead>
      <tbody>
          {children}
      </tbody>
  </table>
)
