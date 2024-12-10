import style from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
        <table className={style.table}>
            <thead>
                <tr className={style.tableHead}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item =>(<tr>
                    <td className={style.transType}>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default TransactionHistory;