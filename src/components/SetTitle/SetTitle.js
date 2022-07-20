import './SetTitle.scss';

export const SetTitle = ({ title }) => {
  let newStr = title[0].toUpperCase() + title.slice(1);

  return <h3 className="SetTitle">{newStr}</h3>;
};
