import { clients } from '../constants';
import styles, { layout } from '../style';

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className='sm:[192pz] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients