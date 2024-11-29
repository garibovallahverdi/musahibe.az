
type RelatedCardListProps = {
  title: string;       
}

const RelatedCard:React.FC<RelatedCardListProps> = ({  title }) => {

    
  return (
    <div
    className={`max-w-sm p-2 gap-2 items-center mx-auto relative bg-backgroundSecond rounded-lg shadow-md overflow-hidden flex` }>   
      <img src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5ld3xlbnwwfHx8fDE2ODAwNTA1NjE&ixlib=rb-1.2.1&q=80&w=1080" alt={title}
       className="  w-2/5 h-3/5  object-cover" />

      <div className="flex flex-col gap-1">
        <span className="w-max text-[10px] text-white font-medium block rounded-xl px-1 self-end uppercase bg-teal-400">Siyasət</span>
        <h2 className="text-[13px] font-semibold line-clamp-3">{title}</h2>
        </div>
      </div>
  );
};

export default RelatedCard;
