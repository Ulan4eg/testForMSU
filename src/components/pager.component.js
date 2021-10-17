import Icon from "@mdi/react";
import { mdiChevronLeftBoxOutline, mdiChevronRightBoxOutline } from "@mdi/js";

export function PagerComponent(props) {
  const currentPage = props.currentPage;

  const _goToNextPage = () => {
    props.switchPage(currentPage + 1);
  };

  const _goToPrevPage = () => {
    if (currentPage > 0) {
      props.switchPage(currentPage - 1);
    }
  };

  return (
    <div className="pagerLine">
      <button disabled={currentPage === 0} onClick={_goToPrevPage}>
        <Icon path={mdiChevronLeftBoxOutline} title="left" size={1} />
      </button>
      {currentPage + 1}
      <button onClick={_goToNextPage}>
        <Icon path={mdiChevronRightBoxOutline} title="left" size={1} />
      </button>
    </div>
  );
}
