import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import style from './InputForm.module.scss';
import cn from 'classnames';
import  { ConstructUrlInfo }  from '../../helpers/constructUrlInfo';

export const InputForm = () => {
  const [repoLink, setRepoLink] = useState('');

  useEffect(() => {
    const repoLink = localStorage.getItem('repoLink');

    if (repoLink) {
      setRepoLink(repoLink);
    }
  }, []);

  const loadRepoIssues = () => {
    const { issuesLink } = ConstructUrlInfo(repoLink);
    const issuesData = JSON.parse(issuesLink || '[]');
    localStorage.setItem('issuesData', issuesData);
  };

  return (
    <div className={cn(style.inputContainer)}>
      <Form.Control
        type="text"
        placeholder="Enter repo URL"
        value={repoLink}
        onChange={(e) => setRepoLink(e.target.value.trim())}
      />

      <button
        className={cn(style.inputButton)}
      >
        Load
      </button>
    </div>
  );
}
