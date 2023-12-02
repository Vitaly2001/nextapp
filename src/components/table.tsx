interface IProps {
    name: string
    status: boolean
}

function TableComponent({ name, status }: IProps) {
    return (
        <div>
            <div>
                {name}
            </div>
            <div>
                {
                    status == true
                        ? "done"
                        : "not done"
                }
            </div>
        </div>
    );
}

export default TableComponent;