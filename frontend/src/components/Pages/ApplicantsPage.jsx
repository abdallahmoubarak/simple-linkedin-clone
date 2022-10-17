import { IoIosArrowBack } from "react-icons/io";
import { useApplicants } from "../../hooks/useUserData";
import ApplicantCard from "../ApplicantCard";
import Loader from "../Loader";
import NoDataPlaceholder from "../NoDataPlaceholder";

export default function ApplicantsPage({
  setMain,
  offerId,
  handleOpenProfile,
}) {
  const { isFetching, data: applicants } = useApplicants(offerId);

  return (
    <>
      <div className="applicant-page">
        <div className="back-to-home pointer" onClick={() => setMain(true)}>
          <IoIosArrowBack />
          <span>Back to home</span>
        </div>
        {isFetching ? (
          <Loader />
        ) : !!applicants[0] ? (
          <div className="cards-container">
            {applicants
              ?.map((applicant, i) => (
                <ApplicantCard
                  key={i}
                  applicant={applicant}
                  handleOpenProfile={handleOpenProfile}
                />
              ))
              .reverse()}
          </div>
        ) : (
          <NoDataPlaceholder name="applicants" />
        )}
      </div>
    </>
  );
}
