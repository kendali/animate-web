
const HeadCenter = ({smallText,boldText}) => {
    return (
        <div className="text-center">
            <span className="text-secondary">{smallText}</span>
            <h2 className="display-5 fw-semibold f-main">{boldText}</h2>
        </div>
    )
}

export default HeadCenter
