import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProjectCardSkeleton() {
  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <Skeleton height={250} />
      </div>
      <div className="project-card__content">
        <h3><Skeleton height={28} width={`80%`} /></h3>
        <p><Skeleton count={3} /></p>
        <div className="project-card__meta">
          <span><Skeleton width={50} /></span>
          <span><Skeleton width={100} /></span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCardSkeleton;