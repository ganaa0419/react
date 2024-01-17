export function Chip(props) {
    const { label } = props;
    
    return (
        <div className="px-5 py-1 bg-gray-200 text-gray-600 rounded-full inline-block">
            { label }
        </div>
    )
}