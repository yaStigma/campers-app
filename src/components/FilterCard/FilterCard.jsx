import CSS from "./FilterCard.module.css"
export default function FilterCard({id, name, icon}) {
    return(
        <>
            <img src={icon} alt={name} className={CSS.icon}/>
            <p className={CSS.text}>{name}</p>
        </>
    )
};
