import "../Sorting/Sorting.css";

const Sorting = () => {
    return (
        <div className="sorting_main">
            <div className="sorting_top">
                <strong>Sort by :</strong>
                <ul className="ul_parent">
                    <li>
                        <a href="">
                            Popularity{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                        <ul className="ul_child">
                            <li>
                                <a href="">Last 3 Days </a>
                            </li>
                            <li>
                                <a href="">Rating</a>
                            </li>
                            <li>
                                <a href="">Latest</a>
                            </li>
                            <li>
                                <a href="">Rating by IMDb</a>
                            </li>
                            <li>
                                <a href="">Year</a>
                            </li>
                            <li>
                                <a href="">Popularity(overall)</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <p className="viewvers">Seen by : 85390</p>
            </div>
            <div className="sorting_bottom">
                <ul>
                    <li>
                        <a href="">
                            Year{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Genre{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Collection{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Country{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Quality{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Translation{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="13"
                                height="13"
                                fill="currentColor"
                                class="bi bi-chevron-down"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sorting;
