

const Icon: React.FC<any> = (props) => {
    return (
        <span>
            <i
                className={
                    props.value >= 1
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 0.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 2
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 1.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 3
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 2.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 4
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 3.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
            <i
                className={
                    props.value >= 5
                        ? "fa-solid fa-star text-warning"
                        : props.value >= 4.5
                            ? "fa-solid fa-star-half-stroke text-warning"
                            : "fa-regular fa-star text-warning"
                }
            ></i>
        </span>
    );
}

export default Icon;