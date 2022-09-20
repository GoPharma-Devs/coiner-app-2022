import className from 'classnames';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-2',
    'flex',
    'flex-wrap',
    'items-center',
    'p-5',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-1/2  sm:w-1/2 text-center m-auto sm:px-6">
        <h3 className="text-3xl text-[#0c4e8b] text-center  font-semibold">
          {props.title}
        </h3>
        <div className="mt-6 text-xl leading-9 text-center">
          {props.description}
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
