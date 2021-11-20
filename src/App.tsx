import { Dashboard } from "./Components/Dashboad";
import Modal from 'react-modal';
import { Header } from "./Components/Header";
import { GlobalStyle } from "./Styles/global";
import { useState } from "react";
import { NewTransactionModel } from "./Components/NewTransactionModel";
import {  TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

     function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
     }

     function handleCloseNewTransactionModal(){
         setIsNewTransactionModalOpen(false);
     }

  return (
    <TransactionsProvider>
      <Header onOpenNewTranslationModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModel 
        isOpen = {isNewTransactionModalOpen}
        onRequestClose = {handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

