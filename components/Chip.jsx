export function Chip(props) {
    const { label } = props;
    
    return (
        <div className="flex px-5 py-1 bg-gray-200 text-gray-600 rounded-full">
            { label }
        </div>
    )
}