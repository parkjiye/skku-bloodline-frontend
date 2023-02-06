import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeaturePost";
import FeaturedPost from "../components/FeaturedPost";
import useGetAllConcertsQuery from "../hooks/query/useGetAllConcertsQuery";
import { Grid } from "@mui/material";

const sections = [
  { title: "About 혈통", url: "#" },
  { title: "역대 공연 리스트", url: "#" },
  { title: "역대 노래 리스트", url: "#" },
  { title: "역대 팀 리스트", url: "#" },
  { title: "가입 문의", url: "#" },
];

const mainFeaturedPost = {
  title: "🔥율전 중앙 락밴드 동아리 화려한 혈통",
  description:
    "🎸1975년부터 지금까지 쭉 이어온 성균관대를 대표하는 중앙 락밴드 화려한혈통은 락, 메탈을 중심으로 어쿠스틱, 팝 등 다양한 장르의 음악을 하는 동아리이며 음악을 좋아하시는 분들은 누구나 환영합니다!",
  image: "../assets/images/image_bloodline.jpg",
  imageText: "main image description",
  linkText: "자세히 보기",
};

function Dashboard() {
  const getAllConcertsQuery = useGetAllConcertsQuery();

  useEffect(() => {
    getAllConcertsQuery.refetch();
  }, []);

  return (
    <Container maxWidth="lg">
      <Header title="🔥 화려한 혈통 🔥" sections={sections} />
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {getAllConcertsQuery.data?.data.map((concert) => (
            <FeaturedPost key={concert.title} concert={concert} />
          ))}
        </Grid>
      </main>
    </Container>
  );
}

export default Dashboard;
