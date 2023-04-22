import { getUsersBase } from 'services/UserServices';
import { Card } from './Card/Card';
import { useEffect, useState } from 'react';
import { TweetsList } from './App.styled';

export const App = () => {
  const [userStatistics, setUserStatistic] = useState([]);

  useEffect(() => {
    getUsersBase().then(results => setUserStatistic([...results]));
  }, []);

  return (
    <div>
      <TweetsList>
        {userStatistics.map(user => {
          return (
            <li key={user.id}>
              <Card userInfo={user} />
            </li>
          );
        })}
      </TweetsList>
    </div>
  );
};
