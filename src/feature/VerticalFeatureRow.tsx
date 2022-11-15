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
    'max-w-3xl',
    'mx-auto',
    'px-4',
    'text-center',
    'text-gray-500',
    'dark:text-gray-300',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-1/2   text-center m-auto sm:px-6">
        <h3 className="text-3xl text-[#0c4e8b] text-center  font-semibold">
          {props.title}
        </h3>
        <div>{props.description}</div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
