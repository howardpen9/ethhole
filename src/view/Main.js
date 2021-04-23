import chainData from '../data/data'
import { TotalValueLocked } from '../components/TotalValueLocked'
import { Table } from '../components/Table'
import { TableRow } from '../components/TableRow'
import { Panel } from '../components/Panel'
import { BalanceFlow } from '../components/BalanceFlow'

// console.log('%O', chainData)
const projects = Object.keys(chainData)
  .filter(proj => proj !== 'ethereum')
  .sort((a, b) => chainData[b].tvl - chainData[a].tvl)

export const Main = ({price, setShowEth}) => (
  <>
    <Panel>
      <BalanceFlow projects={projects} data={chainData} price={price} />
    </Panel>
    <Panel>
      <TotalValueLocked projects={projects} data={chainData} price={price} setShowEth={setShowEth} />
    </Panel>
    <Panel>
      <Table>
        {projects.map(proj => <TableRow key={proj} price={price} name={proj} data={chainData} />)}
      </Table>
    </Panel>
  </>
)