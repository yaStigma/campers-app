import CSS from "./FilterCard.module.css"
export default function FilterCard({id, name, icon, onChange}) {
    return(
        <div className={CSS.card} onClick={onChange}>
            <img src={icon} alt={name} className={CSS.icon}/>
            <p className={CSS.text}>{name}</p>
        </div>
    )
};
