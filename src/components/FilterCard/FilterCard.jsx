export default function FilterCard({id, name, icon}) {
    return(
        <div>
            <img src={icon} alt={name} />
            <p>{name}</p>
        </div>
    )
};
