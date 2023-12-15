
export function FormContactanos(){
  const enviar = () => {
    let nombre=document.getElementById('txtnombres').value;
    let motivo=document.getElementById("cbomotivo").value;
    alert("Gracias por contactarte con nosotros " +nombre+ ".\n"+"Te contactaremos muy pronto por el motivo: " + motivo+ "." + "\n"+ "Información enviada con exito.");
    document.getElementById('form-contactanos').reset();
  }

  return(
    <div className="Formulario">
        <form id="form-contactanos">
          <table>
            <tr>
              <td><b>Tipo de documento:</b></td>
              <td>
                <input type="radio" name="rbnac" />DNI
                <input type="radio" name="rbnac" />Pasaporte
              </td>
            </tr>
            <tr>
              <td><b>Numero de documento:</b></td>
              <td><input className="datos" id="txtdni" placeholder="DNI"></input></td>
            </tr>
            <tr>
              <td><b>Nombres:</b></td>
              <td><input className="datos" id="txtnombres" placeholder="Nombres"></input></td>
            </tr>
            <tr>
              <td><b>Apellidos:</b></td>
              <td><input className="datos" id="txtapellidos" placeholder="Apellidos"></input></td>
            </tr>
            <tr>
              <td><b>Motivo de contacto:</b></td>
              <td>
                <select id="cbomotivo">
                  <option value='Queja o reclamo'>Queja o reclamo</option>
                  <option value='Informacion mas detallada'>Información más detallada</option>
                  <option value='Reembolso'>Reembolso</option>
                  <option value='Doble cobro'>Doble cobro</option>
                  <option value='Reprogramar tour'>Reprogramar tour</option>
                  <option value='Otro'>Otro</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><b>Correo Electronico:</b></td>
              <td>
                <input className="datos" type="email" name="txtemail" placeholder="Correo Electronico" />
              </td>
            </tr>
            <tr>
              <td><b>Comentarios:</b></td>
              <td>
                <textarea id="txtcomentario" rows='10' cols='55'></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan='2'>
                <input type="button" value='Enviar' onClick={enviar} />
                <input type="reset" value='Limpiar' />
              </td>
            </tr>
          </table>
        </form>
      </div>
  )
}