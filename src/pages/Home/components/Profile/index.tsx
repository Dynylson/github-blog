import { useEffect, useState } from "react";
import {
  ProfileContainer,
  ProfileDataContainer,
  ProfileDataContent,
  ProfileImage,
} from "./styles";
import { api } from "../../../../lib/axios";
import { AiFillGithub } from "react-icons/ai";
import { BsFillBuildingFill } from "react-icons/bs";
import { HiExternalLink, HiUsers } from "react-icons/hi";

type UserDataProps = {
  login: string;
  name: string;
  bio: string;
  html_url: string;
  avatar_url: string;
  followers: number;
  company: string;
};

export function Profile() {
  const [userData, setUserData] = useState<UserDataProps | null>(null);

  async function fetchGithubUserData(user: string) {
    const response = await api.get(`https://api.github.com/users/${user}`);

    setUserData(response.data);
  }

  useEffect(() => {
    fetchGithubUserData("Dynylson");
  }, []);

  console.log(userData);

  return (
    <ProfileContainer>
      <ProfileDataContainer>
        <ProfileImage src={userData?.avatar_url} />
        <ProfileDataContent>
          <div className='name-github'>
            <h2>{userData?.name}</h2>
            <a href={userData?.html_url} target='_blank'>
              GITHUB
              <HiExternalLink size={20} />
            </a>
          </div>
          <p className='user-bio'>{userData?.bio}</p>
          <ul className='user-stats'>
            <li>
              <AiFillGithub size={20} /> {userData?.name}
            </li>
            <li>
              <BsFillBuildingFill size={18} />
              {userData?.company}
            </li>
            <li>
              <HiUsers size={20} />
              {userData?.followers} seguidores
            </li>
          </ul>
        </ProfileDataContent>
      </ProfileDataContainer>
    </ProfileContainer>
  );
}
