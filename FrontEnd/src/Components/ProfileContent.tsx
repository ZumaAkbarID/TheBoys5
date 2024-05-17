type Props = {
    onSelected: any;
    contents: any;
};

const ProfileContent = (props: Props) => {
    const { onSelected, contents } = props;
    return <h1>{onSelected}</h1>;
};

export default ProfileContent;
