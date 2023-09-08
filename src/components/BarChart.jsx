export default function BarChart({ data }) {
    return (
        <div className="bar-chart">
            {data.map((temperature, index) => {
                return (
                    <div key={index} className="bar-chart-bar-and-date">
                        <div
                            key={index}
                            className="bar-chart-bar"
                            style={{ height: `${temperature.maxTemp * 7}px` }}
                        >
                            {Math.round(temperature.maxTemp)}
                        </div>
                        <div className="bar-chart-date">{new Date(temperature.date).getDate()}/{new Date(temperature.date).getMonth()}</div>
                    </div>
                )
            })}
        </div>
    )
}